import { Text } from "@/core/components/Text.tsx";
import { useAppLocale } from "@/core/locale.ts";
import React, { type ComponentProps } from "react";
import { css } from "styled-components";

export function Title(props: ComponentProps<typeof Text>) {
  const locale = useAppLocale();

  return (
    <Text
      className={props.className}
      css={styles.root}
      $size={"headlineMedium"}
      $color={"primaryVariant"}
      $weight={700}
      $noSelect
      {...props}
    >
      {locale.historicDates.title}
    </Text>
  );
}

const styles = {
  root: css`
    // Keep line breaks
    white-space: pre-line;
  `,
};
