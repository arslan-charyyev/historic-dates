import { GitHubIcon } from "@/core/components/Icons";
import { Text } from "@/core/components/Text";
import { useAppDevice } from "@/core/device";
import type { ClassProps } from "@/core/types";
import React from "react";
import { css } from "styled-components";

const repoUrl = "https://github.com/arslan-charyyev/historic-dates?tab=readme-ov-file";

export function SelfPlug(props: ClassProps) {
  const device = useAppDevice();

  return (
    <Text css={styles.text} className={props.className} $color={"primaryVariant"} $noSelect>
      Built with ❤️ by Arslan Charyyev | {device === "desktop" && "Source:"}
      <a css={styles.link} href={repoUrl} target="_blank" rel="noreferrer">
        <GitHubIcon css={styles.github} />
      </a>
    </Text>
  );
}

const styles = {
  text: css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `,
  link: css`
    display: flex;
    justify-content: center;

    margin-left: 8px;
  `,
  github: css`
    width: 16px;
    height: auto;
  `,
};
