<template>
    <div>
        <van-cell :title="title" :value="value" @click="show = true"
            is-link />
        <van-popup v-model="show"
            position="bottom">
            <van-datetime-picker
                v-model="dateValue"
                :type="type"
                :min-date="minDate"
                :max-date="maxDate"
                @cancel="show = false"
                @confirm="handleConfirm"
                />
        </van-popup>
        <!-- <van-calendar v-model="show" @confirm="onConfirm"
            :default-date="defaultDate"/> -->
    </div>
</template>
<script>
const defaultFormat = 'YYYY-MM-DD';
import moment from 'moment';
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        value: {
            type: String,
            default: ''
        },
        format: {
            type: String,
            default: defaultFormat
        },
        type: {
            type: String,
            default: 'date'
        },
        minDate: {
            type: Date,
            default: () => new Date('2019-04-01')
        },
        maxDate: {
            type: Date,
            default: () => new Date('2119-04-01')
        }
    },
    data() {
        return {
            show: false,
            moment
        }
    },
    computed: {
        defaultDate() {
            return new Date(this.value);
        },
        dateValue: {
            get() {
                return moment(this.value).format(defaultFormat);
            },
            set(val) {
                // this.$emit('input', moment(val).format(defaultFormat));
            }
        }
    },
    methods: {
        // onConfirm(date) {
        //     let formatDate = moment(date).format(this.format);
        //     this.show = false;
        //     this.$emit('input', formatDate);
        // }
        handleConfirm(val) {
            this.show = false;
            this.$emit('input', moment(val).format(defaultFormat));
        }
    }
}
</script>