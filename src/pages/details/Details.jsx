import React from "react";
import { useParams } from "react-router-dom";
import "./style.scss";
import useFetch from "../../hooks/useFetch";

const Details = () => {
   const { mediaType, id } = useParams();
   const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
   const { data: credits, loading: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);

   return <div>Details</div>;
};

export default Details;
