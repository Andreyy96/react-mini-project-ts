import {useSearchParams} from "react-router-dom";

const UsePaganationPage = () => {

    const [query, setQuery] = useSearchParams({page: '1'});

    const page = query.get('page');

    return {
        page,
        prev: () => setQuery(prev => {
            prev.set('page', (+prev.get('page') - 1).toString())
             console.log(typeof {prev})
            return prev
        }),
        next: () => setQuery(prev => {
            prev.set('page', (+prev.get('page') + 1).toString())
            console.log(typeof prev)
            return prev
        })
    }
}
export {UsePaganationPage}