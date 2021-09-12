import React from "react";

import Loader from "react-loader-spinner";

import { ProgressLoaderContainer } from "./ProgressLoader.styled";

import { colors } from "../../../styles/colorPalette";

const ProgressLoader = (): React.ReactElement => {
  return (
    <ProgressLoaderContainer>
      <Loader type="Puff" color={colors.primaryBlue} height={100} width={100} />
    </ProgressLoaderContainer>
  );
};

export default ProgressLoader;
