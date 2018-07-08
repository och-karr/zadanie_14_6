//komponent, którego zadaniem będzie zwiększanie/zmniejszanie licznika, 
//który to będzie wewnętrznym stanem komponentu

var Counter = React.createClass({

    getDefaultProps: function(props) {
        console.log('getDefaultProps() ustawia domyślne wartości propsów, jeśli nie przekażemy ich do komponentu.')
    },

    componentWillMount: function() {
        console.log('componentWillMount() jeśli chcemy ją wywołać przed metodą render. Przygotowuje do pierwszego renderowania. Możemy tutaj zaktualizować stan.')
    },

    getInitialState: function() { // poczatkowy stan komponentu
        return {
            counter: 0
        };
    },

    componentDidMount() {
        console.log('componentDidMount() wywoływana po metodzie render. Na przykład może być konieczne wprowadzenie zmian w naszym obecnym stanie w zależności od tego jak wyświetlane są elementy.')
    },

    componentWillReceiveProps: function() {
        console.log('componentWillReceiveProps() wywoływana, gdy komponent otrzyma nowe właściwości, które są przekazywane jako argument tej metody i dzięki temu możemy je porównać z wcześniejszymi i wykonać odpowiednie akcje. Na przykład mamy Form Component i Person Component. Form Component ma <input />, które pozwala użytkownikowi zmienić nazwę. Input jest powiązany ze zdarzeniem onChange i ustawia stan w formularzu. Wartość stanu jest następnie przekazywana do Person Component jako prop.')
    },

    shouldComponentUpdate: function(props) {
        console.log('shouldComponentUpdate() wywoływana, żeby sprawdzić czy na pewno jest konieczne ponowne renderowanie. Jeżeli props zmieniły swoją wartość wtedy tak jest i metoda zwróci wartość true i wywoływana jest metoda componentWillUpdate. Służy optymalizacji.')
        props = true;
        return props;
    },

    componentWillUpdate: function() {
        console.log('componentWillUpdate() jest analogiczna do componentWillMount. Wykonywana gdy shouldComponentUpdate zwróci true. Wywoływana przed renderowaniem. Nie wywołujemy tutaj setState().')
    },

    componentDidUpdate: function() {
        console.log('componentDidUpdate() jest aktualizacją wersji componentDidMount. Wykorzystywany do działania w DOM, gdy komponent został zaktualizowany. Używany na przykłąd gdy gdy musimy zaktualizować bibliotekę interfejsu użytkownika nowymi danymi. Jest to również dobre miejsce do wysyłania żądań sieciowych, o ile porównujemy obecne props z poprzednimi (np. Żądanie sieci może nie być konieczne, jeśli propsy się nie zmieniły).')
    },

    componentWillUnmount: function() {
        console.log('componentWillUnmount() jest wywoływana bezpośrednio przed odmontowaniem i zniszczeniem komponentu. W tej metodzie wykonywane jest niezbędne oczyszczanie, takie jak unieważnianie liczników czasu, anulowanie żądań sieciowych.')
    },


    increment: function() { //wartość stanu zmienia się poprzez inkrementację
        this.setState({ //stan ustawiamy za pomocą metody setState
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {className: 'Elem1'},
                React.createElement('button', {onClick: this.increment}, 'Powiększ +1'),
                React.createElement('button', {onClick: this.decrement}, 'Zmniejsz -1'),
                React.createElement('div', {}, 'Counter: ' + this.state.counter)
            )
    }

});

// var app1 = React.createElement(Counter);
// var app2 = React.createElement(Counter);

var element = React.createElement('div', {},
React.createElement(Counter),
React.createElement(Counter)
)

ReactDOM.render(element, document.getElementById('app'));

