import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import PostcodeLookup from "./lookupPostcode";

export default function HomepageDemos(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>API Endpoint & Methods</h2>
        </div>
        <div>
          <PostcodeLookup
            endpointTemplate="api.postcodes.io/postcodes/"
            linkEnd=""
            headingText="Lookup a postcode"
            placeholder=":postcode"
          />

          <PostcodeLookup
            endpointTemplate="api.postcodes.io/postcodes/"
            linkEnd="/validate"
            headingText="Validate a postcode"
            placeholder=":postcode"
          />

          <PostcodeLookup
            endpointTemplate="api.postcodes.io/postcodes/"
            linkEnd="/nearest"
            headingText="Nearest postcodes for postcode"
            placeholder=":postcode"
          />

          <PostcodeLookup
            endpointTemplate="api.postcodes.io/postcodes/"
            linkEnd="/autocomplete"
            headingText="Autocomplete a postcode partial"
            placeholder=":postcode"
          />

          <PostcodeLookup
            endpointTemplate="api.postcodes.io/postcodes?q="
            linkEnd=""
            headingText="Query for postcode"
            placeholder=":postcode"
          />

          <PostcodeLookup
            endpointTemplate="api.postcodes.io/terminated_postcodes/"
            linkEnd=""
            headingText="Lookup terminated postcode"
            placeholder=":postcode"
          />
        </div>
      </div>
    </section>
  );
}
