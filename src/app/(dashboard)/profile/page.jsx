// Next Imports
import dynamic from 'next/dynamic'

// Component Imports
import AccountSettings from '@views/account-settings'

const AccountTab = dynamic(() => import('@views/account-settings/account'))
const ChangePasswordTab = dynamic(() => import('@views/account-settings/change-password'))
const ConnectionsTab = dynamic(() => import('@views/account-settings/connections'))

// Vars
const tabContentList = () => ({
  account: <AccountTab />,
  changePassword: <ChangePasswordTab />,
  connections: <ConnectionsTab />
})

const AccountSettingsPage = () => {
  return <AccountSettings tabContentList={tabContentList()} />
}

export default AccountSettingsPage
