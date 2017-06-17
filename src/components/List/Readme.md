
```
<List
	rows={[
		{ name: 'Fahad Murtaza', age: '20', gender: 'male' },
		{ name: 'Zain Adil', age: '21', gender: 'male' },
		{ name: 'Sarmad Sangi', age: '75', gender: 'male' }
	]}
>
	<List.Column title="Name" flex="3 0 0">
		<List.ColumnCell renderValue="name" />
	</List.Column>
	<List.Column title="Age" flex="3 0 0">
		<List.ColumnCell renderValue="age" />
	</List.Column>
	<List.Column title="Gender" flex="3 0 0">
		<List.ColumnCell renderValue={(row) => (<div>{row.gender}</div>)} />
	</List.Column>
</List>
```
