import { useState } from "react";
import { useAddPuppyMutation } from "./puppySlice";
/**
 * @component
 * Users can add puppies to the roster by submitting this form.
 */
export default function PuppyForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");

  const [addPuppy, { isLoading, error }] = useAddPuppyMutation();
  // TODO: Use the `addPuppy` mutation to add a puppy when the form is submitted

  async function postPuppy(event) {
    event.preventDefault();
    const imageUrl = "https://loremflickr.com/200/300/dog";

    await addPuppy({ name, breed, imageUrl });
    // Placeholder image w/ random photos of dogs
    setName("");
    setBreed("");
    window.location.reload();
  }

  return (
    <>
      <h2>Add a Puppy Below!</h2>
      <form onSubmit={postPuppy}>
        <label>
          Name
          <input
            name="puppyName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Breed
          <input
            name="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </label>
        <button>Add to Roster</button>
        {isLoading && <output>Uploading puppy information...</output>}
        {error && <output>{error.message}</output>}
      </form>
    </>
  );
}
