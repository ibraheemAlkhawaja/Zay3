import React, { useState } from "react";

const usePost = (post, onSuccess) => {
  const [loading, setLoading] = useState(null);
  const handleSubmit = (body) => {
    setLoading("loading");
    post(body)
      .then((res) => {
        console.log(res);
        if (onSuccess) {
          onSuccess(res);
        }
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  return [handleSubmit, loading];
};

export default usePost;
