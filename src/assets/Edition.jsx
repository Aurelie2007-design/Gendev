import React from "react";
import { useParams } from "react-router-dom";
import { getEditionById } from "../store/FormationsData";

export default function Edition() {
  const { id } = useParams();
  const edition = getEditionById(id);

  if (!edition) return <h1 className="p-6">Édition inconnue</h1>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{edition.title}</h1>
      <p className="mt-4">{edition.description}</p>
      {edition.image && (
        <img src={edition.image} alt={edition.title} className="mt-4 rounded" />
      )}
    </div>
  );
}
