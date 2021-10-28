<template>
    <section class="page page--ui-textbox">

        <div class="page__examples">


            <h4 class="page__demo-title">With validation: required</h4>

            <ui-textbox
                autocomplete="off"
                error="This field is required"
                help="If you have multiple names, enter the one you prefer"
                label="Name"
                placeholder="Enter your name"
                required

                :invalid="textbox10Touched && textbox10.length === 0"
                @touch="textbox10Touched = true"

                v-model="textbox10"
            ></ui-textbox>

            <h4 class="page__demo-title">With validation and counter (max length)</h4>

            <ui-textbox
                error="The username may not be more than 16 characters"
                help="Pick a unique username not more than 16 characters"
                icon="person"
                label="Username"
                placeholder="Enter a username"

                :maxlength="16"
                :invalid="textbox11.length > 16"

                v-model="textbox11"
            ></ui-textbox>

            <h4 class="page__demo-title">Type: number, min: 0, max: 99</h4>

            <ui-textbox
                help="The ideal number of cats a person should own, minimum 0, maximum 99"
                label="Number of Cats"
                placeholder="Enter number of cats"
                type="number"

                :min="0"
                :max="99"

                v-model.number="textbox12"
            ></ui-textbox>

            <h4 class="page__demo-title">Multi-line (textarea)</h4>

            <ui-textbox
                enforce-maxlength
                help="Maximum 256 characters"
                label="Short bio"
                placeholder="Introduce yourself in a few words"

                :multi-line="true"
                :maxlength="256"

                v-model="textbox13"
            ></ui-textbox>

            <h4 class="page__demo-title">Multi-line (textarea) with floating label</h4>

            <ui-textbox
                enforce-maxlength
                floating-label
                help="Maximum 256 characters"
                label="Short bio"
                placeholder="Introduce yourself in a few words"

                :multi-line="true"
                :maxlength="256"

                v-model="textbox14"
            ></ui-textbox>

            <h4 class="page__demo-title">Multi-line (textarea) with icon</h4>

            <ui-textbox
                enforce-maxlength
                help="Maximum 256 characters"
                icon="face"
                label="Short bio"
                placeholder="Introduce yourself in a few words"

                :multi-line="true"
                :maxlength="256"

                v-model="textbox15"
            ></ui-textbox>
        </div>


    </section>
</template>

<script>

export default {
    data() {
        return {
            textbox1: null,
            textbox2: '',
            textbox3: '',
            textbox4: 'John Doe',
            textbox5: 'Jane Doe',
            textbox6: '',
            textbox7: '',
            textbox8: '',
            textbox9: '',
            textbox10: '',
            textbox10Touched: false,
            textbox11: '',
            textbox12: 0,
            textbox13: '',
            textbox14: '',
            textbox15: 'My name is Jane Doe...'
        };
    },

};
</script>
