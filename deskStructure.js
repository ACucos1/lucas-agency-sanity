import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
export default (S, context) =>
  S.list()
    .id("root")
    .title("Content")
    .items([
      S.listItem({
        id: "settings",
        title: "Settings",
        child: S.document().title("Site Settings").schemaType("siteSettings"),
      }),
      S.listItem({
        id: "about",
        title: "About",
        child: S.document().title("About Page").schemaType("aboutPage"),
      }),
      S.listItem({
        id: "contact",
        title: "Contact",
        child: S.document().title("Contact Page").schemaType("contactPage"),
      }),
      S.divider(),
      S.listItem({
        id: "subcategories-by-maincategory",
        title: "Filtered Projects",
        child: () => {
          // console.log(S.context.document, context);
          return S.documentTypeList("main_category").child(
            async (mainCategoryId) => {
              const mainCategoryResponse = await fetch(
                `https://o42gmrdk.api.sanity.io/v2022-03-25/data/query/development?query=*[_type == "main_category"] | order(_createdAt asc)`
              );
              const mainCategoryResJson = await mainCategoryResponse.json();
              const mainCategories = mainCategoryResJson.result;
              console.log(mainCategories);
              const mainCategoryIds = [];
              for (const cat of mainCategories) {
                mainCategoryIds.push(cat._id);
              }
              // console.log(mainCategoryIds);
              // console.log("Main Category: " + mainCategoryId);
              if (mainCategoryIds.includes(mainCategoryId)) {
                return S.documentTypeList("sub_category")
                  .title("Subcategories")
                  .filter(
                    `_type == $type && parent_category._ref == $mainCategoryId`
                  )
                  .params({ type: "sub_category", mainCategoryId })

                  .initialValueTemplates([
                    S.initialValueTemplateItem(
                      "subcategories-by-maincategory",
                      {
                        mainCategoryId,
                      }
                    ),
                  ])
                  .child(async (subCategoryId) => {
                    const subCategoryResponse = await fetch(
                      `https://o42gmrdk.api.sanity.io/v2022-03-25/data/query/development?query=*[_type == "sub_category"] | order(_createdAt asc)`
                    );
                    const subCategoryResJson = await subCategoryResponse.json();
                    const subCategories = subCategoryResJson.result;
                    const subCategoryIds = [];
                    for (const cat of subCategories) {
                      subCategoryIds.push(cat._id);
                    }
                    // console.log("Sub Category: " + subCategoryId);

                    if (subCategoryIds.includes(subCategoryId)) {
                      return S.documentList()
                        .title("Projects")
                        .filter(
                          `_type == $type && main_category._ref == $mainCategoryId && sub_category._ref == $subCategoryId`
                        )
                        .params({
                          type: "project",
                          mainCategoryId,
                          subCategoryId,
                        })
                        .canHandleIntent(
                          S.documentTypeList("project").getCanHandleIntent()
                        )
                        .initialValueTemplates([
                          S.initialValueTemplateItem("projects-by-categories", {
                            mainCategoryId,
                            subCategoryId,
                          }),
                        ]);
                    } else {
                      return S.documentWithInitialValueTemplate(
                        "subcategories-by-maincategory",
                        { mainCategoryId, subCategoryId }
                      )
                        .schemaType("sub_category")
                        .id(uuidv4());
                    }
                  })
                  .canHandleIntent(
                    S.documentTypeList("main_category").getCanHandleIntent()
                  )
                  .canHandleIntent(
                    S.documentTypeList("sub_category").getCanHandleIntent()
                  );
              } else {
                return S.document("main_category")
                  .id(uuidv4())
                  .schemaType("main_category");
              }
            }
          );
        },
      }),
      S.divider(),
      orderableDocumentListDeskItem({
        type: "main_category",
        title: "Edit Main Categories",
        S,
        context,
      }),
      orderableDocumentListDeskItem({
        type: "sub_category",
        title: "Edit Sub Categories",
        S,
        context,
      }),
      S.listItem({
        id: "all-projects",
        title: "All Projects",
        child: S.documentTypeList("project"),
      }),

      // ...S.documentTypeListItems().filter(
      //   (listItem) =>
      //     ![
      //       // "project",
      //       // "siteSettings",
      //       // "menuBackgroundImage",
      //       // "sub_category",
      //       // "main_category",
      //       "media.tag",
      //     ].includes(listItem.getId())
      // ),
    ]);

// const mainCategoryResponse = await fetch(
//   `https://o42gmrdk.api.sanity.io/v2022-03-25/data/query/development?query=*[_type == "main_category"] | order(_createdAt asc)`
// );
// const mainCategoryResJson = await mainCategoryResponse.json();
// const mainCategories = mainCategoryResJson.result;
// console.log(mainCategories);
// const categoryIds = [];
// for (const cat of mainCategories) {
//   categoryIds.push(cat._id);
// }
// console.log(categoryIds);
// console.log("Main Category: " + mainCategoryId);
function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}
