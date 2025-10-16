import type { useFetchProps } from "./useFetchProps";
import type { IUser } from "../api/userType";
import { useEffect, useState } from "react";

export function useFetch({queryFn}: useFetchProps) {

    const [status, setStatus] = useState({
        data: null,
        loading: true,
        error: false
    })


    useEffect(() => {
        let isMounted = true

        const fetchData = async () => {
            try {
                const resp = await queryFn()
                if(isMounted) {
                    setStatus({
                        data: resp,
                        loading: true,
                        error: false
                    })
                }
            } catch {
                if(isMounted) {
                    setStatus({
                        data: null,
                        loading: true,
                        error: false
                    })
                }  
            }
        }

        fetchData()
        return () => {
            isMounted = false
        }
    }, [queryFn])

    return status
}