import { useState, useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab1.css";

import { supabase } from "../../supabase-client";

const Tab1 = () => {
  const [countries, setCountries] = useState([]); // Supabase example

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    console.log(await supabase.from("countries").select());
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">TAB 1</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* Supabase example: */}
        <h2>Fetching countries from Supabase</h2>
        <ul>
          {countries.map((country) => (
            <li key={country.name}>{country.name}</li>
          ))}
        </ul>
        <img
          src="https://media1.tenor.com/m/DNCBqbguizsAAAAd/magic.gif"
          alt="GLAZEDDD!"
          style={{ height: "200px" }}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;