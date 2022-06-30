import { useNavigate, useParams } from "react-router-dom";
import useCharacter from "../hooks/useCharacter";



const Character = () => {
    const params = useParams();
    const navigate = useNavigate()
    const { error, loading, data } = useCharacter(params.id);


    console.log(params)
    console.log(data)
    return <>

        {loading ? "loading" : <img src={data.character.image} alt="" />}

        <button onClick={() => navigate(-1)}> Go Back</button>

    </>
}

export default Character;

