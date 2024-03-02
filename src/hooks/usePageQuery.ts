import {useSearchParams} from "react-router-dom";

const usePageQuery = () => {

    const [query, setQuery] = useSearchParams({page: '1'});

    const page = query.get('page');

    return {
        page,
        prev: () => setQuery(prev => {
            if (page <= "1") {
                prev.set("page", "1")
            }
            else {
                prev.set('page', (+page - 1).toString())
            }
            return prev
        }),
        next: () => setQuery(prev => {
            prev.set('page', (+page + 1).toString())
            return prev
        })
    }
}

export {usePageQuery}