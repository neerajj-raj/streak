/*
 * Copyright(c) 2026 Oscar.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Oscar ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Oscar.
 *
 *
 * @author Minna Ancy Mathew
 */
import { Script } from "streak/components";

type Props = {
  data?: {
    taxonomy?: string;
    slug?: string;
  };
};

const PLPContextScript = (props: Props) => {
  const taxonomy = props?.data?.taxonomy || "";
  const slug = props?.data?.slug || "";

  return (
    <Script id="PLPContextScript">
      {() => {
        (window as any).__PLP_TAXONOMY__ = taxonomy;
        (window as any).__PLP_SLUG__ = slug;

        console.log("✅ PLP Context Set:", {
          taxonomy,
          slug,
        });
      }}
    </Script>
  );
};

export default PLPContextScript;
