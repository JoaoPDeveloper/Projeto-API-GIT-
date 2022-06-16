import React,{useEffect, useState} from "react";
import * as S from './styled';
import { useNavigate } from "react-router-dom";

export default function repositories(){
    const navigate = useNavigate() //chamado do history 
    const  [ repositories, setRepositories ] = useState([]);

    useEffect(() => {
        let repositoriesName = localStorage.getItem('RepositoriesName');
        console.log(repositoriesName)
        
        if (repositoriesName){
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName)
            localStorage.clear()
        }else{
            navigate("/")
        }
    }, []);

    return (
        <S.Container>
            <S.Title> Repositórios</S.Title>
            <S.List>
                 {repositories.map((repository, index) => <S.ListItem key={index}>{repository}</S.ListItem>)}
            </S.List>
            <S.LinkHome to ="/">Voltar</S.LinkHome>
        </S.Container>
    )
}   