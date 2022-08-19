const _collection = 'launcher_data';

function _toDocument(item) {
	return JSON.stringify(item);
}

function _toObject(item) {
	return JSON.parse(item);
}

function _generateId() {
	const _max = 999;
	const _min = 100;
	const random = Math.floor(Math.random() * (_max - _min + 1) ) + _min;
	return 'id_' + new Date().getTime().toString() + random.toString();
}

function list() {
	const req = localStorage.getItem(_collection);
	return !!req ? _toObject(req) : [];
}

// function insert(item) {
// 	item = {...item, id: _generateId()};
// 	const list = list();

// 	localStorage.setItem(_collection, _toDocument(JSON.stringify(item)));
// }

// function remove(item) {
// 	const newList = list().filter(storedItem => !!storedItem.id && storedItem.id !== item.id);
// 	localStorage.setItem(_collection, _toDocument(localStorage.getItem(_collection)));
// 	return newList;
// }

export class StorageHelper {
	static _toDocument(item) {
		return JSON.stringify(item);
	}

	static _toObject(item) {
		return JSON.parse(item);
	}
	
	static _generateId() {
		const _max = 999;
		const _min = 100;
		const random = Math.floor(Math.random() * (_max - _min + 1) ) + _min;
		return 'id_' + new Date().getTime().toString() + random.toString();
	}

	static reset() {
		localStorage.removeItem(_collection);
	}
	
	static list() {
		const req = localStorage.getItem(_collection);
		return !!req ? StorageHelper._toObject(req) : [];
	}
	
	static insert(item) {
		item = {...item, id: _generateId()};
		const list = StorageHelper.list();
		console.log({item, list});
		list.unshift(item);
	
		localStorage.setItem(_collection, StorageHelper._toDocument(list));
	}
	
	static remove(item) {
		const newList = list().filter(storedItem => !!storedItem.id && storedItem.id !== item.id);
		localStorage.setItem(_collection, StorageHelper._toDocument(localStorage.getItem(_collection)));
		return newList;
	}

	static overwrite(data) {
		localStorage.setItem(_collection, _toDocument(data));
	}
}



