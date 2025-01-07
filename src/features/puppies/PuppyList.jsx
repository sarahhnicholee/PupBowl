/**
 * @component
 * Shows a list of puppies in the roster.
 * Users can select a puppy to see more information about it.
 */
import { useGetPuppiesQuery } from "./puppySlice";
import { useState } from "react";
export default function PuppyList({ setSelectedPuppyId }) {
  // TODO: Get data from getPuppies query

  const { data: puppies, isLoading, error } = useGetPuppiesQuery();
  const [searchTerm, setSearchTerm] = useState("");

  if (isLoading) {
    return <p>Loading.....</p>;
  }

  if (error) {
    return <p>There was an error: {error.message}</p>;
  }

  const filteredData = puppies.filter((puppy) => {
    // Implement your filtering logic here
    return puppy.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <div className="searchBar">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a player..."
        />
      </div>
      <article>
        <h2>Roster</h2>
        <ul className="puppies">
          {isLoading && <li>Loading puppies...</li>}
          {filteredData.map((p) => (
            <li key={p.id}>
              <h3 key="SP">
                {p.name} #{p.id}
              </h3>
              <div>
                <img src={p.imageUrl} alt={p.name} />
              </div>
              <button onClick={() => setSelectedPuppyId(p.id)}>
                See details
              </button>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}
