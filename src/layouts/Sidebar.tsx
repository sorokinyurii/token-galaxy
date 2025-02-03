import {
	BulbOutlined,
	FormOutlined,
	FundOutlined,
	HomeOutlined,
} from '@ant-design/icons';
import { Avatar, Layout, Menu } from 'antd';
import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const items: MenuItem[] = [
	{
		label: <NavLink to='/'>Home</NavLink>,
		key: '/',
		icon: <HomeOutlined />,
	},
	{
		label: <NavLink to='/currencies'>Currencies</NavLink>,
		key: '/currencies',
		icon: <FundOutlined />,
	},
	{
		label: <NavLink to='/reference-currencies'>Reference Currencies</NavLink>,
		key: '/reference-currencies',
		icon: <FormOutlined />,
	},
	{
		label: <NavLink to='/news'>News</NavLink>,
		key: '/news',
		icon: <BulbOutlined />,
	},
];

function Sidebar() {
	const { pathname } = useLocation();
	const [collapsed, setCollapsed] = useState(false);

	return (
		<Layout.Sider
			collapsible
			collapsed={collapsed}
			theme='dark'
			width={250}
			onCollapse={(value) => setCollapsed(value)}
			breakpoint='md'
		>
			<Link className='flex items-center my-5' to='/'>
				{!collapsed && (
					<h4 className='transition-all duration-300 text-white ml-4 text-2xl'>
						TokenGalaxy
					</h4>
				)}
			</Link>

			<Menu
				defaultSelectedKeys={[pathname]}
				theme='dark'
				mode='inline'
				items={items}
			/>
		</Layout.Sider>
	);
}

export default Sidebar;
