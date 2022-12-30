export default (S) =>
  S.list()
    .title("Point Cloud Creative")
    .items([
      S.listItem()
        .title("Settings")
        .child(
          S.documentListItem()
            .id("siteSettings")
            .title("Settings")
            .schemaType("project")
        ),
      S.divider(),
      S.listItem()
        .title("Photography")
        .child(
          S.list()
            .title("Categories")
            .items([
              S.listItem()
                .title("Travel")
                .child(
                  S.list()
                    .title("Travel Projects")
                    .items([
                      S.documentListItem()
                        .title("Project 1")
                        .id("travelProject1")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 2")
                        .id("travelProject2")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 3")
                        .id("travelProject3")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 4")
                        .id("travelProject4")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 5")
                        .id("travelProject5")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 6")
                        .id("travelProject6")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 7")
                        .id("travelProject7")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 8")
                        .id("travelProject8")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 9")
                        .id("travelProject9")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 10")
                        .id("travelProject10")
                        .schemaType("project"),
                    ])
                ),
              S.listItem()
                .title("Product")
                .child(
                  S.list()
                    .title("Product Projects")
                    .items([
                      S.documentListItem()
                        .title("Project 1")
                        .id("productProject1")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 2")
                        .id("productProject2")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 3")
                        .id("productProject3")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 4")
                        .id("productProject4")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 5")
                        .id("productProject5")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 6")
                        .id("productProject6")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 7")
                        .id("productProject7")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 8")
                        .id("productProject8")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 9")
                        .id("productProject9")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 10")
                        .id("productProject10")
                        .schemaType("project"),
                    ])
                ),
              S.listItem()
                .title("Fashion")
                .child(
                  S.list()
                    .title("Fashion Projects")
                    .items([
                      S.documentListItem()
                        .title("Project 1")
                        .id("fashionProject1")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 2")
                        .id("fashionProject2")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 3")
                        .id("fashionProject3")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 4")
                        .id("fashionProject4")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 5")
                        .id("fashionProject5")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 6")
                        .id("fashionProject6")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 7")
                        .id("fashionProject7")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 8")
                        .id("fashionProject8")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 9")
                        .id("fashionProject9")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 10")
                        .id("fashionProject10")
                        .schemaType("project"),
                    ])
                ),
              S.listItem()
                .title("Landscape")
                .child(
                  S.list()
                    .title("Landscape Projects")
                    .items([
                      S.documentListItem()
                        .title("Project 1")
                        .id("landscapeProject1")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 2")
                        .id("landscapeProject2")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 3")
                        .id("landscapeProject3")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 4")
                        .id("landscapeProject4")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 5")
                        .id("landscapeProject5")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 6")
                        .id("landscapeProject6")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 7")
                        .id("landscapeProject7")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 8")
                        .id("landscapeProject8")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 9")
                        .id("landscapeProject9")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 10")
                        .id("landscapeProject10")
                        .schemaType("project"),
                    ])
                ),
              S.listItem()
                .title("Drone")
                .child(
                  S.list()
                    .title("Drone Projects")
                    .items([
                      S.documentListItem()
                        .title("Project 1")
                        .id("droneProject1")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 2")
                        .id("droneProject2")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 3")
                        .id("droneProject3")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 4")
                        .id("droneProject4")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 5")
                        .id("droneProject5")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 6")
                        .id("droneProject6")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 7")
                        .id("droneProject7")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 8")
                        .id("droneProject8")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 9")
                        .id("droneProject9")
                        .schemaType("project"),
                      S.documentListItem()
                        .title("Project 10")
                        .id("droneProject10")
                        .schemaType("project"),
                    ])
                ),
              ...S.documentTypeListItems().filter(
                (listItem) => !["project"].includes(listItem.getId())
              ),
            ])
        ),

      S.listItem().title("video"),
      S.listItem().title("Drone"),
      S.listItem().title("3D"),
      S.listItem().title("Stream"),
      S.listItem().title("About"),
    ]);
