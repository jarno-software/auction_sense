import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useQuery, UseQueryResult } from "react-query";
import { Link } from "react-router-dom";
import ICategory from "../../models/ICategory";

export default function DropdownNav() {
  const [categoryDropdownOpen, setCategoryDropdownOpen] =
    useState<boolean>(false);

  const { enqueueSnackbar } = useSnackbar();

  const allCategories = async () => {
    const res = await fetch(import.meta.env.VITE_BASE_URL_API + "/all/categories", {
      method: "GET",
      mode: "cors",
    });
    return res.json();
  };

  const {
    isLoading,
    isError,
    data,
    error,
  }: UseQueryResult<ICategory[], Error> = useQuery<ICategory[], Error>(
    "categories",
    allCategories
  );

  const categoryDropdownClick = () => {
    setCategoryDropdownOpen(true);
  };
  const categoryMouseLeft = () => {
    setCategoryDropdownOpen(false);
  };

  useEffect(() => {
    if (isError) {
      enqueueSnackbar(error.name, {
        variant: "error",
        autoHideDuration: 5000,
        anchorOrigin: { vertical: "top", horizontal: "center" },
      });
    }
  }, [isError, error]);

  if (isError) {
    return (
      <div
      className="dropdown"
      onMouseOver={categoryDropdownClick}
      onMouseLeave={categoryMouseLeft}
    >
      <button className="dropdown-btn hover:bg-orange-400 w-full text-left px-5 py-2">
        Categories
      </button>
      <div
        className={
          "dropdown-content sm:absolute text-white bg-orange-400 sm:shadow sm:rounded sm:w-40 sm:bg-white sm:text-black " +
          (categoryDropdownOpen ? "" : "hidden")
        }
        data-testid="dropdown-content"
      >
        Category service down
      </div>
    </div>
    );
  }

  if (isLoading) {
    return (
      <div
        className="dropdown"
        onMouseOver={categoryDropdownClick}
        onMouseLeave={categoryMouseLeft}
      >
        <button className="dropdown-btn hover:bg-orange-400 w-full text-left px-5 py-2">
          Categories
        </button>
        <div
          className={
            "dropdown-content sm:absolute text-white bg-orange-400 sm:shadow sm:rounded sm:w-40 sm:bg-white sm:text-black " +
            (categoryDropdownOpen ? "" : "hidden")
          }
          data-testid="dropdown-content"
        >
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div
      className="dropdown"
      onMouseOver={categoryDropdownClick}
      onMouseLeave={categoryMouseLeft}
    >
      <button className="dropdown-btn hover:bg-orange-400 w-full text-left px-5 py-2">
        Categories
      </button>
      <div
        className={
          "dropdown-content sm:absolute text-white bg-orange-400 sm:shadow sm:rounded sm:w-40 sm:bg-white sm:text-black " +
          (categoryDropdownOpen ? "" : "hidden")
        }
        data-testid="dropdown-content"
      >
        {data?.map((category) => (
          <Link
            className="block hover:bg-orange-300 sm:hover:bg-gray-200 px-5 py-2"
            key={category.id}
            to={`/c/${category.name}`}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
