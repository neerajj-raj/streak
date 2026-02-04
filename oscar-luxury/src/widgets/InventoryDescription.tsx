/*
 * Copyright(c) 2025 Oscar.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Oscar ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Oscar.
 *
 *
 * @author Neeraj
 */

const InventoryDescription = ({ content }: { content: string }) => {
  return <section className="space-y-2 mt-8 text-slate-700 font-medium" dangerouslySetInnerHTML={{ __html: content ?? "" }} />;
};

export default InventoryDescription;
