import React from "react";

const TopicDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return <div>page</div>;
};

export default TopicDetail;
