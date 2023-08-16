import { useEffect, useState } from "react";
import { ITodo } from "../types";

export function useTodos() {
    const [page, setPage] = useState(1);
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [loading, setLoading] = useState(false);
    
    const next = () => setPage(prev => prev + 1) 

    useEffect(() => {
        (async () => {
            const todosUrl = 'https://jsonplaceholder.typicode.com/todos';
            const query = new URLSearchParams({ _limit: String(page * 20) }).toString();
            const url = todosUrl + '?' + query;

            setLoading(true);
            const response = await fetch(url);
            const data = await response.json();
            setLoading(false);

            setTodos(data);
        })();
    }, [page]);

    return {
        todos,
        next,
        loading
    } 
}