import { Meta, StoryFn } from "@storybook/react";
import { SomeComponent } from "./SomeComponent";

const meta = {
    title: "SomeComponent",
};

export default meta;

export const Default = () => <SomeComponent value="foo" />;

export const Errored = () => <SomeComponent value="error" />;
