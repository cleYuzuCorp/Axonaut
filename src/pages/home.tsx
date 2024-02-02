import { Button, Container, Paper, Stack, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { theme } from "../theme"
import { useLocation } from "react-router-dom"

const Home = () => {

    const searchParams = new URLSearchParams(useLocation().search)

    const [entreprise, setEntreprise] = useState<string>()
    const [siret, setSiret] = useState<string>()
    const [website, setWebsite] = useState<string>()

    const [transaction, setTransaction] = useState<string>()
    const [price, setPrice] = useState<number>()
    const [description, setDescription] = useState<string>()

    const [products, setProducts] = useState<{ name: string; qtity: number }[]>()

    const NonNull = (value: string | null): string => {
        if (value === null) {
            return ""
        }
        return value;
    }

    useEffect(() => {
        const products: { name: string; qtity: number }[] = [];

        searchParams.forEach((value, key) => {
            const match = key.match(/^items\[(\d+)\]\[(id|name|qtity)\]$/);
            if (match) {
                const index = parseInt(match[1], 10);
                const property = match[2];

                if (!products[index]) {
                    products[index] = { name: "", qtity: 0 };
                }

                if (property === "id") {
                } else if (property === "name") {
                    products[index].name = value;
                } else if (property === "qtity") {
                    products[index].qtity = parseInt(value, 10);
                }
            }
        })

        setProducts(products.filter(Boolean));

        setTransaction(NonNull(searchParams.get("companyInfo[dealname]")))
        setEntreprise(NonNull(searchParams.get("companyInfo[companyName]")))
        setWebsite(NonNull(searchParams.get("companyInfo[companyWebsite]")))
        setSiret(NonNull(searchParams.get("companyInfo[companySiret]")))
        setPrice(parseFloat(NonNull(searchParams.get("companyInfo[dealPrice]"))))
    }, [searchParams])

    const handleClick = () => {
        console.log(products, "produits")
        console.log(transaction, "transactions")
        console.log(entreprise, "entreprise")
        console.log(website, "site web")
        console.log(siret, "siret")
        console.log(price, "prix")
        console.log(description, "description")
    }

    return (
        <Container maxWidth="lg">
            <Stack spacing={8} alignItems="center" marginTop="50px" width="100%">
                <Typography variant="h1">
                    Axonaut : Définition des factures
                </Typography>

                <Stack direction="row" justifyContent="space-around" width="100%">
                    <Stack spacing={2}>
                        <Typography variant="h2">
                            Entreprise associé
                        </Typography>

                        <TextField
                            required
                            label="Nom"
                            value={entreprise}
                            onChange={(e) => setEntreprise(e.target.value)}
                            InputProps={{ readOnly: true }}
                        />

                        <TextField
                            required
                            label="Siret"
                            value={siret}
                            onChange={(e) => setSiret(e.target.value)}
                            InputProps={{ readOnly: true }}
                        />

                        <TextField
                            required
                            label="Site web"
                            value={website}
                            onChange={(e) => setWebsite(e.target.value)}
                            InputProps={{ readOnly: true }}
                        />
                    </Stack>

                    <Stack spacing={2}>
                        <Typography variant="h2">
                            Transaction
                        </Typography>

                        <TextField
                            required
                            label="Nom"
                            value={transaction}
                            onChange={(e) => setTransaction(e.target.value)}
                            InputProps={{ readOnly: true }}
                        />

                        <TextField
                            type="number"
                            label="Prix"
                            value={price}
                            onChange={(e) => setPrice(parseFloat(e.target.value))}
                            inputProps={{ min: 0 }}
                        />

                        <TextField
                            label="Description"
                            multiline
                            minRows={4}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Stack>

                    <Stack spacing={2}>
                        <Typography variant="h2">
                            Produits
                        </Typography>

                        <Table component={Paper} sx={{ width: '350px' }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        Nom
                                    </TableCell>
                                    <TableCell align="right">
                                        Quantité
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {products?.map((product) => <TableRow>
                                    <TableCell>
                                        {product.name}
                                    </TableCell>
                                    <TableCell align="right">
                                        {product.qtity}
                                    </TableCell>
                                </TableRow>)}
                            </TableBody>
                        </Table>
                    </Stack>
                </Stack>

                <Button
                    variant="contained"
                    onClick={handleClick}
                    sx={{
                        width: '370px',
                        border: '1px solid #CBD6E2',
                        color: theme.palette.background.default,
                        background: theme.palette.primary.main,
                        transition: 'ease-in-out 0.5',
                        textTransform: 'none',
                        boxShadow: 'none',
                        "&:hover": {
                            border: '1px solid #CBD6E2',
                            background: theme.palette.primary.light,
                            boxShadow: 'none',
                        }
                    }}
                >
                    Valider
                </Button>
            </Stack>
        </Container>
    )
}

export default Home