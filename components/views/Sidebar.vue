<template>
    <div class="drawer-side">
        <label aria-label="close sidebar" class="drawer-overlay" for="my-drawer-2"></label>
        <ul class="menu bg-base-200 w-56 rounded-box h-full">
            <li>
                <div class="avatar justify-center">
                    <div class="w-24 mask mask-hexagon-2">
                        <img src="https://i.pravatar.cc/300" />
                    </div>
                </div>
            </li>
            <li>
                <a>
                    <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z" fill="#1C274C"></path> <path clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z" fill="#1C274C" fill-rule="evenodd"></path> </g></svg>
                    Nouvel espace
                </a>
            </li>
            <li>
                <details open>
                    <summary>
                        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path clip-rule="evenodd" d="M3.75 4.5L4.5 3.75H10.5L11.25 4.5V10.5L10.5 11.25H4.5L3.75 10.5V4.5ZM5.25 5.25V9.75H9.75V5.25H5.25ZM12.75 4.5L13.5 3.75H19.5L20.25 4.5V10.5L19.5 11.25H13.5L12.75 10.5V4.5ZM14.25 5.25V9.75H18.75V5.25H14.25ZM3.75 13.5L4.5 12.75H10.5L11.25 13.5V19.5L10.5 20.25H4.5L3.75 19.5V13.5ZM5.25 14.25V18.75H9.75V14.25H5.25ZM12.75 13.5L13.5 12.75H19.5L20.25 13.5V19.5L19.5 20.25H13.5L12.75 19.5V13.5ZM14.25 14.25V18.75H18.75V14.25H14.25Z" fill="#080341" fill-rule="evenodd"></path> </g></svg>
                        Mes espaces
                    </summary>
                    <ul>
                        <li><a>DARYL SOFTWARE soo</a></li>
                    </ul>
                </details>
            </li>
            <li></li>
            <li>
                <a @click="logout">
                    <svg class="h-5 w-5" fill="none" viewBox="0 -0.5 25 25" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.75 9.874C11.75 10.2882 12.0858 10.624 12.5 10.624C12.9142 10.624 13.25 10.2882 13.25 9.874H11.75ZM13.25 4C13.25 3.58579 12.9142 3.25 12.5 3.25C12.0858 3.25 11.75 3.58579 11.75 4H13.25ZM9.81082 6.66156C10.1878 6.48991 10.3542 6.04515 10.1826 5.66818C10.0109 5.29121 9.56615 5.12478 9.18918 5.29644L9.81082 6.66156ZM5.5 12.16L4.7499 12.1561L4.75005 12.1687L5.5 12.16ZM12.5 19L12.5086 18.25C12.5029 18.25 12.4971 18.25 12.4914 18.25L12.5 19ZM19.5 12.16L20.2501 12.1687L20.25 12.1561L19.5 12.16ZM15.8108 5.29644C15.4338 5.12478 14.9891 5.29121 14.8174 5.66818C14.6458 6.04515 14.8122 6.48991 15.1892 6.66156L15.8108 5.29644ZM13.25 9.874V4H11.75V9.874H13.25ZM9.18918 5.29644C6.49843 6.52171 4.7655 9.19951 4.75001 12.1561L6.24999 12.1639C6.26242 9.79237 7.65246 7.6444 9.81082 6.66156L9.18918 5.29644ZM4.75005 12.1687C4.79935 16.4046 8.27278 19.7986 12.5086 19.75L12.4914 18.25C9.08384 18.2892 6.28961 15.5588 6.24995 12.1513L4.75005 12.1687ZM12.4914 19.75C16.7272 19.7986 20.2007 16.4046 20.2499 12.1687L18.7501 12.1513C18.7104 15.5588 15.9162 18.2892 12.5086 18.25L12.4914 19.75ZM20.25 12.1561C20.2345 9.19951 18.5016 6.52171 15.8108 5.29644L15.1892 6.66156C17.3475 7.6444 18.7376 9.79237 18.75 12.1639L20.25 12.1561Z" fill="#000000"></path> </g></svg>
                    Logout
                </a>
            </li>
        </ul>
    </div>
</template>
<script lang="ts" setup>

const logout = async () => {
    const { logout } = useUserStore();
    await logout();

    await useRouter().push('/login');
}

</script>
