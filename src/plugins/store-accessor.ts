import { Plugin } from "@nuxt/types";
import { initialiseStores } from "~/utils/store-accessor";

const accessor: Plugin = ({ store }) => {
  initialiseStores(store);
};

export default accessor;
