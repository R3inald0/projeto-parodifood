Feature: Parodifood fastfood

    Background: Entrar no portal Parodifood
        Given que estou na tela restaurante Parodifood

    Scenario Outline:Comprar lanches com dinheiro
        When eu pesquisar pelo restaurante <nomeRest>
        And adicionar uma "Pizza de Mussarela"
        # And verificar se o pedido foi adicionado ao carrinho
        # When eu fechar o pedido escolhido  
        # Then devo ser redirecionado para tela "Finalize o seu pedido"
        # When eu preencho o cadastro com os meus dados pessoais
        # And valido os itens do pedido
        # And seleciono a forma de pagamento "Dinheiro"
        # And realizo a conclusão do pedido
        # Then a compra deve ser concluida com sucesso
        Examples:
            | nomeRest  |
            | Pizza Bug |



