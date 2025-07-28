type Ingredient = {
	id: number;
	name: string;
};

type RecipeIngredient = {
	id: number;
	quantity: number;
	unit: string;
	ingredientId: number;
	recipeId: number;
};

type RecipeInstruction = {
	id: number;
	step: number;
	description: string;
	recipeId: number;
};

type Recipe = {
	id: number;
	title: string;
	description: string;
};

type RecipeComment = {
	id: number;
	username: string;
	content: string;
	note: number | undefined;
	createdAt: Date;
	recipeId: number;
};

type Category = {
	id: number;
	name: string;
	description: string;
};

export {Category,RecipeComment , Recipe , RecipeInstruction , Ingredient , RecipeIngredient}