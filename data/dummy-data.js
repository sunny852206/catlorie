import Category from "../models/category";

export const CATEGORIES = [
  new Category("c1", "Italian", "#f5428d"),
  new Category("c2", "Quick & Easy", "#f54242"),
  new Category("c3", "Hamburgers", "#f5a442"),
  new Category("c4", "German", "#f5d142"),
  new Category("c5", "Light & Lovely", "#368dff"),
  new Category("c6", "Exotic", "#41d95d"),
  new Category("c7", "Breakfast", "#9eecff"),
  new Category("c8", "Asian", "#b9ffb0"),
  new Category("c9", "French", "#ffc7ff"),
  new Category("c10", "Summer", "#47fced"),
];

export const Meal = [
  new Category("c1", "Italian1", 200, "#f5428d"),
  new Category("c2", "Quick & Easy", 150, "#f54242"),
  new Category("c3", "Hamburgers", 343, "#f5a442"),
  new Category("c4", "German", 342, "#f5d142"),
  new Category("c5", "Light & Lovely", 686, "#368dff"),
  new Category("c6", "Exotic", 352, "#41d95d"),
];

export const Treat = [
  new Category("c7", "Breakfast", 112, "#9eecff"),
  new Category("c8", "Asian", 322, "#b9ffb0"),
  new Category("c9", "French", 311, "#ffc7ff"),
  new Category("c10", "Summer", 22, "#47fced"),
];
