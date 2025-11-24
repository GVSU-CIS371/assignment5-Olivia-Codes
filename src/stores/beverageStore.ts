import { defineStore } from "pinia";
import {
  BaseBeverageType,
  CreamerType,
  SyrupType,
  BeverageType,
} from "../types/beverage";
import tempretures from "../data/tempretures.json";
import { db, auth } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  query,
  where,
  Unsubscribe,
} from "firebase/firestore";
import { User } from "firebase/auth";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    user: null as User | null, 
    temps: tempretures,
    currentTemp: tempretures[0],
    bases: [] as BaseBeverageType[],
    currentBase: "" as string,
    syrups: [] as SyrupType[],
    currentSyrup: "" as string,
    creamers: [] as CreamerType[],
    currentCreamer: "" as string,
    beverages: [] as BeverageType[],
    currentBeverage: null as BeverageType | null,
    beverageName: "", 
    currentName: "", 
    isLoaded: false,
    unsubscribeBeverages: null as Unsubscribe | null, 
  }),

  actions: {
    
    async init() {
      try {
     
        const basesSnapshot = await getDocs(collection(db, "bases"));
        this.bases = basesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as BaseBeverageType[];

     
        const creamersSnapshot = await getDocs(collection(db, "creamers"));
        this.creamers = creamersSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as CreamerType[];


        const syrupsSnapshot = await getDocs(collection(db, "syrups"));
        this.syrups = syrupsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as SyrupType[];

    
        if (this.bases.length > 0) {
          this.currentBase = this.bases[0].id;
        }
        if (this.creamers.length > 0) {
          this.currentCreamer = this.creamers[0].id;
        }
        if (this.syrups.length > 0) {
          this.currentSyrup = this.syrups[0].id;
        }

   
        this.isLoaded = true;

        console.log("Data loaded from Firestore successfully!");
      } catch (error) {
        console.error("Error loading data from Firestore:", error);
      }
    },

 
    setUser(user: User | null) {
      this.user = user;

  
      if (this.unsubscribeBeverages) {
        this.unsubscribeBeverages();
        this.unsubscribeBeverages = null;
      }


      if (!user) {
        this.beverages = [];
        this.currentBeverage = null;
        console.log("User logged out, beverages cleared");
        return;
      }

   
      this.loadUserBeverages(user.uid);
    },

   
    loadUserBeverages(userId: string) {
      const beveragesRef = collection(db, "beverages");
      const userBeveragesQuery = query(
        beveragesRef,
        where("userId", "==", userId)
      );

  
      this.unsubscribeBeverages = onSnapshot(userBeveragesQuery, (snapshot) => {
        this.beverages = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as BeverageType[];

      
        if (this.currentBeverage) {
          const updatedCurrent = this.beverages.find(
            (b) => b.id === this.currentBeverage?.id
          );
          if (updatedCurrent) {
            this.currentBeverage = updatedCurrent;
          } else {
            this.currentBeverage = null;
          }
        }

        console.log(`Loaded ${this.beverages.length} beverages for user ${userId}`);
      });
    },

 
    makeBeverage(): string {
   
      if (!this.user) {
        return "No user logged in, please sign in first.";
      }

     
      const name = this.beverageName || this.currentName;

  
      if (!name || name.trim() === "") {
        return "Please complete all beverage options and the name before making a beverage.";
      }

   
      if (!this.currentBase || !this.currentCreamer || !this.currentSyrup) {
        return "Please complete all beverage options and the name before making a beverage.";
      }

     
      const base = this.bases.find((b) => b.id === this.currentBase);
      const creamer = this.creamers.find((c) => c.id === this.currentCreamer);
      const syrup = this.syrups.find((s) => s.id === this.currentSyrup);

      if (!base || !creamer || !syrup) {
        return "Please complete all beverage options and the name before making a beverage.";
      }

    
      const newBeverage = {
        name: name.trim(),
        temp: this.currentTemp,
        base: base,
        creamer: creamer,
        syrup: syrup,
        userId: this.user.uid, 
      };

   
      addDoc(collection(db, "beverages"), newBeverage)
        .then(() => {
          console.log("Beverage saved to Firestore:", newBeverage);
     
          this.beverageName = "";
          this.currentName = "";
        })
        .catch((error) => {
          console.error("Error saving beverage to Firestore:", error);
        });

      return `Beverage ${name.trim()} made successfully!`;
    },

    
    showBeverage(beverage?: BeverageType) {
    
      const bev = beverage || this.currentBeverage;
      
      if (!bev) return;

  
      this.currentTemp = bev.temp;
      this.currentBase = bev.base.id;
      this.currentCreamer = bev.creamer.id;
      this.currentSyrup = bev.syrup.id;
      this.beverageName = bev.name;
      this.currentName = bev.name;

      console.log("Displaying beverage:", bev.name);
    },
  },
});