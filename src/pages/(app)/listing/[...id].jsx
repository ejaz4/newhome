import React from "react";
import { useParams } from "react-router";
import { useProperty } from "../../../libs/useProperty";
import NotFound from "../../404";
import { propertyNameCreator } from "../../../libs/propertyName";
import { PhotoBento } from "./_components/gallery/bento";
import styles from "./listing.module.css";
import { KVBox } from "./_components/kv";
import { PriceBox } from "./_components/priceBox";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const ListingPage = () => {
  const params = useParams();
  const id = params["*"];
  const property = useProperty(id);

  if (property == null) {
    return <NotFound />;
  }

  const name = propertyNameCreator(
    property.type,
    property.location.street,
    property.location.town,
    property.price.isRent,
  );

  return (
    <main className={styles.listing}>
      <PhotoBento images={property.images} />
      <h1 className={styles.name}>{name}</h1>

      {/* Tab strip */}
      <div className={styles.meta}>
        <Tabs className={styles.tabs}>
          <TabList className={styles.tabStrip}>
            <Tab>Description</Tab>
            {property.floorPlan && <Tab>Floorplan</Tab>}
            <Tab>Location</Tab>
          </TabList>
          <TabPanel>
            <KVBox title={"Description"}>
              <p>
                {property.description &&
                  property.description.split("\n").map((t) => (
                    <>
                      {t}
                      <br />
                    </>
                  ))}
              </p>
            </KVBox>
          </TabPanel>

          {property.floorPlan && (
            <TabPanel>
              <img src={property.floorPlan} />
            </TabPanel>
          )}

          <TabPanel>
            <iframe
              loading="lazy"
              style={{
                border: "none",
                width: "100%",
                height: 400,
                borderRadius: "1rem",
              }}
              allowfullscreen
              src={`https://maps.google.com/maps?q=${property.location.number}%2C${property.location.street}%2C${property.location.town}&output=embed`}
            />
          </TabPanel>
        </Tabs>

        {/* Price box with meta data and information */}
        <PriceBox property={property} />
      </div>
    </main>
  );
};

export default ListingPage;
