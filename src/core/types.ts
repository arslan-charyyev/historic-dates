import React from "react";

/**
 * Useful for propagating styled-components styles
 * @see https://styled-components.com/docs/basics#styling-any-component
 */
export type ClassProps = Pick<React.HTMLAttributes<HTMLElement>, "className">;
