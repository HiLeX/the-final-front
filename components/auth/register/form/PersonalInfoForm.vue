<template>
    <div>
        <card
            v-for="(step, key) in steps"
            v-show="step.isActive"
            :key="key"
            v-model="step.value"
            v-bind="step"
            @submit="hideMe(key)"/>
    </div>
</template>

<script lang="ts" setup>
import Card from "~/components/misc/Card.vue";
import {useUserStore} from "#imports";
import {Gender, type UserProfileInput} from "~/generated/graphql";

const { userProfile } = useUserStore();

const hideMe = async (place: number) => {
    console.log(place);
    if (steps[place+1]) {
        steps[place].isActive = false;
        steps[place+1].isActive = true;
    } else {
        await submitData();
    }
}

userProfile.onSetProfileError((e) => {
    console.log(e);
})

userProfile.onSetProfileResult((res) => {
    console.log(res);
})

const submitData = async () => {
    const payload = steps.reduce((acc, el) => {
        acc[el.name as keyof UserProfileInput] = el.value;
        return acc;
    }, <UserProfileInput>{});
    await userProfile.set({
        input: payload
    })
}

const steps = reactive([
    {
        isActive: true,
        isLoading: false,
        name: 'sex',
        value: ref(),
        iconPathSvg: 'M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z',
        inputClass: 'grow',
        component: {
            name: 'InputRadio',
            props: {
                datas: [
                    {
                        label: 'Femme',
                        value: Gender.Woman
                    },
                    {
                        label: 'Homme',
                        value: Gender.Man
                    }
                ]
                // inputClass: string;
            }
        }
    },
    {
        isActive: false,
        isLoading: false,
        value: ref(),
        name: 'firstname',
        iconPathSvg: 'M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z',
        inputClass: 'grow',
        component: {
            name: 'InputText',
            props: {
                placeholder: 'Prénom',
            }
        }
    },
    {
    isActive: false,
    isLoading: false,
    value: ref(),
    name: 'lastname',
    iconPathSvg: 'M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z',
    inputClass: 'grow',
    component: {
        name: 'InputText',
        props: {
            placeholder: 'Nom',
        }
    }
}, {
    isActive: false,
    isLoading: false,
    value: ref(),
        name: 'birthdate',
    inputClass: 'grow',
    iconPathSvg: 'M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z',
    component: {
        name: 'InputText',
        props: {
            type: 'date',
            placeholder: 'Date de naissance',
            validation: (value: string) => ''
        }
    }
},
])
</script>
