import path from "node:path";
import { Category, Ingredient, RecipeIngredient, RecipeInstruction, Recipe, RecipeComment, IngredientAsset } from "./type";


const categories: Category[] = [
	{
		id: 1,
		name: "Entrées",
		description: "Des entrées délicieuses pour commencer le repas.",
	},
	{
		id: 2,
		name: "Plats principaux",
		description: "Des plats principaux savoureux pour le coeur du repas.",
	},
	{
		id: 3,
		name: "Desserts",
		description:
			"Des desserts sucrés pour terminer le repas sur une note agréable.",
	},
];


//todo 
const ingredientAssets : IngredientAsset[] = [
	{ingredientID : 1 , path : "/assets/ingredients/pain.webp"},
	{ingredientID : 2 , path : "/assets/ingredients/tomate.webp"},
	{ingredientID : 3 , path : "/assets/ingredients/basilic.webp"},
	{ingredientID : 4 , path : "/assets/ingredients/oliveOil.png"},
	{ingredientID : 5 , path : "/assets/ingredients/concombre.webp"},
	{ingredientID : 6 , path : "/assets/ingredients/oignonRouge.webp"},
	{ingredientID : 7 , path : "/assets/ingredients/feta.webp"},
	{ingredientID : 8 , path : "/assets/ingredients/olive.webp"},
	{ingredientID : 9 , path : "/assets/ingredients/pate.webp"},
	{ingredientID : 10 , path : "/assets/ingredients/oeuf.webp"},
	{ingredientID : 11 , path : "/assets/ingredients/pancetta.webp"},
	{ingredientID : 12 , path : "/assets/ingredients/parmesan.webp"},
	{ingredientID : 13 , path : "/assets/ingredients/poivre.webp"},
	{ingredientID : 14 , path : "/assets/ingredients/poulet.webp"},
	{ingredientID : 15 , path : "/assets/ingredients/herbes.webp"},
	{ingredientID : 16 , path : "/assets/ingredients/ail.webp"},
	{ingredientID : 17 , path : "/assets/ingredients/beurre.webp"},
	{ingredientID : 18 , path : "/assets/ingredients/biscuitSpoon.webp"},
	{ingredientID : 19 , path : "/assets/ingredients/cafe.webp"},
	{ingredientID : 20 , path : "/assets/ingredients/mascarpone.webp"},
	{ingredientID : 21 , path : "/assets/ingredients/cacao.webp"},
	{ingredientID : 22 , path : "/assets/ingredients/pateBrisee.webp"},
	{ingredientID : 23 , path : "/assets/ingredients/pommeGolden.webp"},
	{ingredientID : 24 , path : "/assets/ingredients/sucre.webp"},
	{ingredientID : 25 , path : "/assets/ingredients/cannelle.webp"},


] 

const ingredients: Ingredient[] = [
	{ id: 1, name: "Pain" },
	{ id: 2, name: "Tomates" },
	{ id: 3, name: "Basilic" },
	{ id: 4, name: "Huile d'olive" },
	{ id: 5, name: "Concombre" },
	{ id: 6, name: "Oignons rouges" },
	{ id: 7, name: "Feta" },
	{ id: 8, name: "Olives" },
	{ id: 9, name: "Pâtes" },
	{ id: 10, name: "oeufs" },
	{ id: 11, name: "Pancetta" },
	{ id: 12, name: "Parmesan" },
	{ id: 13, name: "Poivre" },
	{ id: 14, name: "Poulet" },
	{ id: 15, name: "Herbes de Provence" },
	{ id: 16, name: "Ail" },
	{ id: 17, name: "Beurre" },
	{ id: 18, name: "Biscuits à la cuillère" },
	{ id: 19, name: "Café" },
	{ id: 20, name: "Mascarpone" },
	{ id: 21, name: "Cacao" },
	{ id: 22, name: "Pâte brisée" },
	{ id: 23, name: "Pommes" },
	{ id: 24, name: "Sucre" },
	{ id: 25, name: "Cannelle" },
];

const recipeIngredients: RecipeIngredient[] = [
	{ id: 1, quantity: 1, unit: "tranche", ingredientId: 1, recipeId: 101 },
	{ id: 2, quantity: 2, unit: "unités", ingredientId: 2, recipeId: 101 },
	{ id: 3, quantity: 5, unit: "feuilles", ingredientId: 3, recipeId: 101 },
	{
		id: 4,
		quantity: 2,
		unit: "cuillères à soupe",
		ingredientId: 4,
		recipeId: 101,
	},
	{ id: 5, quantity: 1, unit: "unité", ingredientId: 5, recipeId: 102 },
	{ id: 6, quantity: 2, unit: "unités", ingredientId: 2, recipeId: 102 },
	{ id: 7, quantity: 1, unit: "unité", ingredientId: 6, recipeId: 102 },
	{ id: 8, quantity: 200, unit: "grammes", ingredientId: 7, recipeId: 102 },
	{ id: 9, quantity: 10, unit: "unités", ingredientId: 8, recipeId: 102 },
	{ id: 10, quantity: 400, unit: "grammes", ingredientId: 9, recipeId: 201 },
	{ id: 11, quantity: 2, unit: "unités", ingredientId: 10, recipeId: 201 },
	{ id: 12, quantity: 100, unit: "grammes", ingredientId: 11, recipeId: 201 },
	{ id: 13, quantity: 50, unit: "grammes", ingredientId: 12, recipeId: 201 },
	{ id: 14, quantity: 1, unit: "pincée", ingredientId: 13, recipeId: 201 },
	{ id: 15, quantity: 1, unit: "unité", ingredientId: 14, recipeId: 202 },
	{ id: 16, quantity: 10, unit: "grammes", ingredientId: 15, recipeId: 202 },
	{ id: 17, quantity: 2, unit: "gousses", ingredientId: 16, recipeId: 202 },
	{ id: 18, quantity: 50, unit: "grammes", ingredientId: 17, recipeId: 202 },
	{ id: 19, quantity: 200, unit: "grammes", ingredientId: 18, recipeId: 301 },
	{
		id: 20,
		quantity: 250,
		unit: "millilitres",
		ingredientId: 19,
		recipeId: 301,
	},
	{ id: 21, quantity: 250, unit: "grammes", ingredientId: 20, recipeId: 301 },
	{ id: 22, quantity: 2, unit: "unités", ingredientId: 10, recipeId: 301 },
	{ id: 23, quantity: 20, unit: "grammes", ingredientId: 21, recipeId: 301 },
	{ id: 24, quantity: 1, unit: "unité", ingredientId: 22, recipeId: 302 },
	{ id: 25, quantity: 6, unit: "unités", ingredientId: 23, recipeId: 302 },
	{ id: 26, quantity: 100, unit: "grammes", ingredientId: 24, recipeId: 302 },
	{ id: 27, quantity: 10, unit: "grammes", ingredientId: 25, recipeId: 302 },
];

const recipeInstructions: RecipeInstruction[] = [
	{ id: 1, step: 1, description: "Grillez le pain.", recipeId: 101 },
	{
		id: 2,
		step: 2,
		description: "Ajoutez les tomates et le basilic.",
		recipeId: 101,
	},
	{ id: 3, step: 3, description: "Arrosez d'huile d'olive.", recipeId: 101 },
	{ id: 4, step: 1, description: "Coupez les légumes.", recipeId: 102 },
	{
		id: 5,
		step: 2,
		description: "Ajoutez la feta et les olives.",
		recipeId: 102,
	},
	{ id: 6, step: 3, description: "Assaisonnez.", recipeId: 102 },
	{ id: 7, step: 1, description: "Faites cuire les pâtes.", recipeId: 201 },
	{
		id: 8,
		step: 2,
		description: "Mélangez avec les oeufs, la pancetta et le parmesan.",
		recipeId: 201,
	},
	{ id: 9, step: 1, description: "Préchauffez le four.", recipeId: 202 },
	{
		id: 10,
		step: 2,
		description: "Badigeonnez le poulet d'herbes et de beurre.",
		recipeId: 202,
	},
	{ id: 11, step: 3, description: "Faites rôtir.", recipeId: 202 },
	{
		id: 12,
		step: 1,
		description: "Trempez les biscuits dans le café.",
		recipeId: 301,
	},
	{
		id: 13,
		step: 2,
		description: "Alternez avec la crème au mascarpone.",
		recipeId: 301,
	},
	{ id: 14, step: 3, description: "Saupoudrez de cacao.", recipeId: 301 },
	{ id: 15, step: 1, description: "Ã‰talez la pâte.", recipeId: 302 },
	{
		id: 16,
		step: 2,
		description: "Ajoutez les pommes sucrées et la cannelle.",
		recipeId: 302,
	},
	{ id: 17, step: 3, description: "Faites cuire.", recipeId: 302 },
];

const recipes: Recipe[] = [
	{
		id: 101,
		title: "Bruschetta",
		description: "Une entrée italienne classique.",
	},
	{
		id: 102,
		title: "Salade Grecque",
		description: "Une salade fraÃ®che et savoureuse.",
	},
	{
		id: 201,
		title: "Pâtes Carbonara",
		description: "Un plat italien riche et crémeux.",
	},
	{
		id: 202,
		title: "Poulet Rôti",
		description: "Un poulet rôti aux herbes de Provence.",
	},
	{ id: 301, title: "Tiramisu", description: "Un dessert italien classique." },
	{
		id: 302,
		title: "Tarte aux Pommes",
		description: "Une tarte sucrée à la cannelle.",
	},
];

const recipeComments: RecipeComment[] = [
	{
		id: 1,
		username: "Alice",
		content: "Délicieux et facile à préparer !",
		note: 5,
		createdAt: new Date("2025-07-27T12:43:10.475713"),
		recipeId: 101,
	},
	{
		id: 2,
		username: "Bob",
		content: "J'adore les bruschettas, mais j'aurais aimé plus de basilic.",
		note: 4,
		createdAt: new Date("2025-07-27T12:43:10.476227"),
		recipeId: 101,
	},
	{
		id: 3,
		username: "Charlie",
		content: "RafraÃ®chissant et parfait pour l'été !",
		note: 5,
		createdAt: new Date("2025-07-27T12:43:10.476254"),
		recipeId: 102,
	},
	{
		id: 4,
		username: "David",
		content: "Très bon, mais un peu trop salé à mon goÃ»t.",
		note: 4,
		createdAt: new Date("2025-07-27T12:43:10.476257"),
		recipeId: 201,
	},
	{
		id: 5,
		username: "Eve",
		content: "Parfait pour un dÃ®ner en famille !",
		note: 5,
		createdAt: new Date("2025-07-27T12:43:10.476259"),
		recipeId: 202,
	},
	{
		id: 6,
		username: "Frank",
		content: "Le poulet était un peu sec.",
		note: 3,
		createdAt: new Date("2025-07-27T12:43:10.476261"),
		recipeId: 202,
	},
	{
		id: 7,
		username: "Grace",
		content: "Un dessert italien classique, tout simplement délicieux !",
		note: 5,
		createdAt: new Date("2025-07-27T12:43:10.476262"),
		recipeId: 301,
	},
	{
		id: 8,
		username: "Hank",
		content: "La tarte était délicieuse, mais j'aurais aimé plus de cannelle.",
		note: 4,
		createdAt: new Date("2025-07-27T12:43:10.476265"),
		recipeId: 302,
	},
];


export {categories , ingredients , recipeIngredients , recipeInstructions , recipes , recipeComments , ingredientAssets}