import produtos from "@/core/constants/produtos"

export default function PadinaProduto(props: any){
    const id = +props.params.id
    const produto = produtos.find((p) => p.id === id)

    return produto ? <div>{produto.nome}</div> : <div>Produto não encontrado!</div>
}