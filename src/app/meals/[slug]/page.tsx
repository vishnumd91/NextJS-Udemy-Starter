import { ReactElement } from "react";

const MealPage = ({ params }: { params: { slug: string } }): ReactElement => {
  return <div>This is a Meal Page {params.slug}</div>;
};

export default MealPage;
