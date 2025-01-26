import { CategoryElementDivRemove } from "./remove-category.styled";
import Button from "../button/button.component";
import { useDispatch, useSelector } from "react-redux";
import { setCategoriesRemoveStart } from "../../store/categoriesDirectory/categories-directory-actions";
import { categoriesDirectoryDataSelect } from "../../store/categoriesDirectory/categories-directory-selectors";

const RemoveCategoryElement = ({ setIsRemoveXclick, categoryName }) => {
  const dispatch = useDispatch();
  const directoryData = useSelector(categoriesDirectoryDataSelect);
  const titleRemainingEl = () =>
    directoryData
      .filter((value) => value.title !== categoryName)
      .map((value) => value.title);
  console.log(titleRemainingEl());
  const btnNoEvent = () => setIsRemoveXclick(false);
  const btnYesEvent = () => {
    const titleArr = titleRemainingEl();
    dispatch(setCategoriesRemoveStart(categoryName, titleArr));
  };

  return (
    <CategoryElementDivRemove>
      <p>Are you certain that you wish to delete this category?</p>

      <Button onClick={btnNoEvent}>NO</Button>
      <Button onClick={btnYesEvent}>YES</Button>
    </CategoryElementDivRemove>
  );
};

export default RemoveCategoryElement;
