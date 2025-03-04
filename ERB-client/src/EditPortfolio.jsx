

const EditPortfolio = () => {
    const { portfolioId } = useParams()
    const [portfolio, setPortfolio] = useState({
        photos: []
    })

    useEffect(() => {
        const loadPortfolio = async () => {
            if (!portfolioId) return;
            const data = await fetchPortfolioById(portfolioId);
            setPortfolio(data);
        };

        loadPortfolio();
    }, [])

    return     (
        <>
        <p>{portfolio.name}</p>
        </>
    )
}

export default EditPortfolio