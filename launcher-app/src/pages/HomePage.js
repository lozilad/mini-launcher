import { CardBasic } from '../components/CardBasic';
import { Link, LinkExternal } from '../components/Link';
import { SAMPLE_URLS } from '../data/samplelinks';
import './HomePage.css';
import { BiExport, BiImport, BiPlus, BiRocket, BiShieldX } from "react-icons/bi";
import { useEffect, useState } from 'react';
import { StorageHelper } from '../helpers/storage.helper';
import { UrlHelper } from '../helpers/url.helper';
import { Button } from '../components/Button';
import { SaveHelper } from '../helpers/save.helper';

export default function HomePage({title}) {
	const [items, setItems] = useState([]);
	const [showInput, setShowInput] = useState(false);

	useEffect(() => {
		setItems(StorageHelper.list());
	}, [])

	function toggle() {
		setShowInput(!showInput);
	}

	function submit(e) {
		e.preventDefault();
		const input = document.querySelector('#id_input_url');
		const url = input.value;
		if (!!url && url.trim().length > 0 && UrlHelper.isAUrl(url)) {
			StorageHelper.insert({label: url, url: url});
			setItems(StorageHelper.list());
		}
		toggle();
	}

	function doReset() {
		StorageHelper.reset();
		setItems([]);
	}

	function doExport() {
		const data = {
			createdDate: new Date().toISOString(),
			data: StorageHelper.list()
		};
		SaveHelper.saveAsJson(data);
	}

	function doImport() {
		SaveHelper.readFromFile((data) => {
			const parsed = JSON.parse(data);
			const list = parsed.data || [];
			console.log({list: parsed.data || []});
			_doSynchronize(items, list, (result) => {
				setItems(result);
				StorageHelper.overwrite(result);
			});
		});
	}

	function _doSynchronize(current, next, callback) {
		console.log({current, next, callback});
		/** Steps (Algorith)
		 * 1. Order: current items first, then next items 
		 * 2. Create idStringSet (or search in the list of objects.)
		 * 3. Loop with next items. Each next item, seach in idStringSet
		 * - If existed: patch with next item
		 * - If unexisted: append
		*/
		const result = [...current];
		// const idStringSet = current.map(item => item.id).join(',');
		next.forEach((item, i) => {
			const index = current.findIndex(cItem => cItem.id === item.id);
			if (!!item.id && index > -1) {
				result[index] = {...result[index], ...item};
			} else {
				result.push(item);
			}
			if (i === next.length - 1) {
				callback(result);
			}
		});
	}


	
	return (
		<div className={'page-home'}>	
			<h1 className='window-no-drag'>{title} <BiRocket/></h1>

			<div style={{'marginTop': '32px', 'display': 'flex', 'justifyContent': 'space-between'}}>
				<div>
					<Button text={'Import'} icon={<BiImport/>} onTap={doImport} outline/>
					<Button text={'Export'} icon={<BiExport/>} onTap={doExport}/>
				</div>
				<Button text={'Reset'} icon={<BiShieldX/>} onTap={doReset}/>
			</div>

			<div className={'grid'} style={{'marginTop': '32px'}}>
				<CardBasic layout={'center'} borderStyle={'dashed'}>
					<Link onTap={toggle}><BiPlus/></Link>
					{ showInput && (<form onSubmit={(e) => submit(e)}>
						<input type={'text'} id="id_input_url" autoFocus/>
					</form>)
					}
				</CardBasic>
				{items && items.map((item, index) => (
					<CardBasic key={index}>
						<LinkExternal url={item.url}>
							<Link label={item.label || ''} truncate={true}/>
						</LinkExternal>
					</CardBasic>
				))}
			</div>
		</div>
	);
}