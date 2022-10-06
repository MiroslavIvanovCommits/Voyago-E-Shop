export function productsBreadCrumbData() {
	let category = localStorage.getItem("category");
	let subCategory = localStorage.getItem("subCategory");

	if (!category) {
		category = "bikes";
	}

	if (!subCategory) {
		subCategory = "Mountain Bikes";
	}

	return [
		{
			id: 1,
			title: "Home",
			icon: "home",
			path: "/"
		},
		{
			id: 2,
			text: category![0].toUpperCase() + category?.slice(1),
			title: category![0].toUpperCase() + category?.slice(1),
			path: `/categories/${category}`
		},
		{
			id: 3,
			text: subCategory![0].toUpperCase() + subCategory?.slice(1),
			title: subCategory![0].toUpperCase() + subCategory?.slice(1)
		}
	]
};
