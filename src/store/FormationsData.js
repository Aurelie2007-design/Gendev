import { images } from "../assets/images/home/image";
import { axiosInstance } from "../assets/library/axios";

const FormationsData = async () => {
  try {
    const response = await axiosInstance.get("/formations");
    return response.data;
  } catch (error) {
    console.log("Une erreur est survnue:", error);
    throw error;
  }
};

// Dummy data  simulees pour les editions
const editions = [
  {
    id: 1,
    title: "Premiere edition",
    description: "Ceci est la premiere edition de notre formation.",
    image: ` ${images.image1}`,
  },
  {
    id: 2,
    title: "Deuxieme edition",
    description: "La deuxieme edition de notre formation",
    image: ` ${images.image2}`,
  },
  {
    id: 3,
    title: "Troisieme edition",
    description: "Retour sur la troisieme édition, pour l'annee 2026",
    image: ` ${images.image3}`,
  },
];

export function getAllEditions() {
  return editions;
}

export function getEditionById(id) {
  return editions.find((edition) => edition.id === parseInt(id));
}
