import React from "react";
import "./Meal.scss";
import { FaUtensilSpoon } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";

const MealSingle = ({ meal }) => {
  console.log(meal);
  let tags = meal?.tags?.split(",");
  console.log(meal);
  let instructions = meal?.instructions?.split("\r\n");
  instructions = instructions?.filter(
    (instructions) => instructions.length > 1
  );

  return (
    <div className="section-wrapper">
      <div className="container">
        <div className="breadcrumb bg-orange text-white">
          <ul className="flex align-center my-2">
            <li className="breadcrumb-item">
              <Link to="/" className="flex align-center">
                <AiFillHome size={22} />
              </Link>
            </li>
            <li className="flex align-center mx-1">
              <BiChevronRight size={23} />
            </li>
            <li className="breadcrumb-item flex">
              <span to="" className="fs-15 fw-15 text-uppercase">
                {meal?.title}
              </span>
            </li>
          </ul>
        </div>

        <div className="sc-title">Meal Details</div>
        <section className="sc-details bg-white">
          <div className="details-head grid">
            <div className="details-img">
              <img src={meal?.thumbnail} alt="" className="img-cover" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MealSingle;
