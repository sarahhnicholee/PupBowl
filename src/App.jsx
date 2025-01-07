import PuppyDetails from "./features/puppies/PuppyDetails";
import PuppyList from "./features/puppies/PuppyList";
import PuppyForm from "./features/puppies/PuppyForm";
import "./App.css";
import { useState } from "react";
/**
 * @component
 * This app shows a list of puppy bowl players from the API.
 * Users can view players in the roster, add a player to the roster,
 * see more details about a specific player, and remove a player from the roster.
 */
export default function App() {
  const [selectedPuppyId, setSelectedPuppyId] = useState();

  return (
    <>
      <h1>Puppy Bowl Player Information</h1>
      <PuppyForm />
      <main>
        <PuppyDetails
          selectedPuppyId={selectedPuppyId}
          setSelectedPuppyId={setSelectedPuppyId}
        />
        <PuppyList setSelectedPuppyId={setSelectedPuppyId} />
      </main>
    </>
  );
}
