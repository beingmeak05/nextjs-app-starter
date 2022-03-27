import { css } from "@mui/material";
import type { NextPage } from "next";
import PageTitle from "../src/Components/pageTitle";
import ThemeUpdater from "../src/Components/ThemeUpdater";

const Home: NextPage = () => {
      return (
            <main>
                  <PageTitle />
                  <ThemeUpdater />
            </main>
      );
};
