"use client";
import React from "react";
import bookshelfSettingsStyles from "./bookshelf-settings.module.scss";
import CustomSettings from "./CustomSettings/CustomSettings";
import AlgorithmSelection from "./AlgorithmSelection/AlgorithmSelection";
import Controller from "./Controller/Controller";

const BookshelfSettings: React.FC = () => {
  return (
    <section className={bookshelfSettingsStyles["bookshelf-settings"]}>
      <CustomSettings />
      <AlgorithmSelection />
      <Controller />
    </section>
  );
};

export default BookshelfSettings;
